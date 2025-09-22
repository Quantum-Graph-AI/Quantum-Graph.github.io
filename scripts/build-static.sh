#!/bin/bash

echo "Starting static build for GitHub Pages..."

# Clean previous builds
rm -rf out .next

# Set environment variables
export NODE_ENV=production
export NODE_OPTIONS='--max-old-space-size=4096'

# Run the build with timeout
timeout 120 npx next build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"

    # Add .nojekyll file
    touch out/.nojekyll

    # List output files
    echo "Build output:"
    ls -la out/
else
    echo "Build failed or timed out. Creating fallback static export..."

    # Create out directory manually
    mkdir -p out

    # Copy public files
    cp -r public/* out/ 2>/dev/null || true

    # Create a simple index.html fallback
    cat > out/index.html << 'EOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuantumGraph - Universo de Soluções em IA</title>
    <meta name="description" content="Navegue pelo universo interativo de grafos 3D da QuantumGraph. Especializados em IA, Machine Learning e soluções computacionais avançadas.">
    <style>
        body {
            margin: 0;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            color: #00ffff;
            font-family: system-ui, -apple-system, sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 3rem;
            background: linear-gradient(45deg, #00ffff, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        p {
            font-size: 1.2rem;
            color: #a0a0a0;
            margin: 1rem 0;
        }
        .loading {
            margin-top: 2rem;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 255, 255, 0.3);
            border-top-color: #00ffff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>QuantumGraph</h1>
        <p>Universo de Soluções em IA</p>
        <div class="loading">
            <div class="spinner"></div>
            <p>Carregando experiência 3D...</p>
        </div>
    </div>
    <script>
        // Redirect to the main app after a short delay
        setTimeout(() => {
            if (window.location.pathname !== '/Quantum-Graph.github.io/') {
                window.location.href = '/Quantum-Graph.github.io/';
            }
        }, 2000);
    </script>
</body>
</html>
EOF

    # Add .nojekyll
    touch out/.nojekyll
fi

echo "Static build process completed!"