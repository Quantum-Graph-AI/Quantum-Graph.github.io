const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting custom build process...');

// Clean previous builds
if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true });
    console.log('✓ Cleaned previous out directory');
}

if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true });
    console.log('✓ Cleaned previous .next directory');
}

// Set up build with timeout
const buildProcess = exec('npx next build', {
    env: {
        ...process.env,
        NODE_ENV: 'production'
    }
});

let buildOutput = '';

buildProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
    buildOutput += data;
});

buildProcess.stderr.on('data', (data) => {
    process.stderr.write(data);
    buildOutput += data;
});

// Set a timeout
const timeout = setTimeout(() => {
    console.log('\n⚠️ Build timeout reached, terminating...');
    buildProcess.kill();
}, 60000); // 60 seconds timeout

buildProcess.on('exit', (code) => {
    clearTimeout(timeout);

    if (code === 0) {
        console.log('\n✅ Build completed successfully!');

        // Add .nojekyll
        if (fs.existsSync('out')) {
            fs.writeFileSync('out/.nojekyll', '');
            console.log('✓ Added .nojekyll file');
        }
    } else {
        console.log('\n❌ Build failed with code:', code);

        // Check if it was timeout
        if (buildOutput.includes('Creating an optimized production build')) {
            console.log('\n📦 Build seems to be hanging. Creating minimal fallback...');

            // Create minimal out directory
            if (!fs.existsSync('out')) {
                fs.mkdirSync('out');
            }

            // Copy public files
            if (fs.existsSync('public')) {
                const publicFiles = fs.readdirSync('public');
                publicFiles.forEach(file => {
                    const src = path.join('public', file);
                    const dest = path.join('out', file);
                    if (fs.statSync(src).isFile()) {
                        fs.copyFileSync(src, dest);
                    }
                });
                console.log('✓ Copied public files');
            }

            // Add .nojekyll
            fs.writeFileSync('out/.nojekyll', '');
            console.log('✓ Added .nojekyll file');

            console.log('\n📁 Fallback build created in out/ directory');
        }
    }

    // List out directory contents
    if (fs.existsSync('out')) {
        console.log('\n📂 Output directory contents:');
        const files = fs.readdirSync('out');
        files.forEach(file => {
            const stats = fs.statSync(path.join('out', file));
            console.log(`  ${stats.isDirectory() ? '📁' : '📄'} ${file}`);
        });
    }
});