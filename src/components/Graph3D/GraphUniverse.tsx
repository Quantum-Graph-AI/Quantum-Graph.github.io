'use client';

import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Mesh, BufferGeometry } from 'three';
import { motion } from 'framer-motion';
import NodeInfoPanel from './NodeInfoPanel';
import ParticleSystem from './ParticleSystem';

interface Node {
  id: string;
  position: [number, number, number];
  label: string;
  color: string;
  size: number;
  children?: Node[];
}

interface GraphNodeProps {
  node: Node;
  onClick: (node: Node) => void;
  isActive: boolean;
}

function GraphNode({ node, onClick, isActive }: GraphNodeProps) {
  const meshRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group position={node.position}>
      <Sphere
        ref={meshRef}
        args={[node.size]}
        onClick={() => onClick(node)}
        onPointerOver={(e) => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = 'auto';
        }}
      >
        <meshStandardMaterial
          color={node.color}
          emissive={isActive ? node.color : '#000000'}
          emissiveIntensity={isActive ? 0.3 : 0.1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      <Text
        ref={textRef}
        position={[0, node.size + 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {node.label}
      </Text>
      
      {/* Glow effect */}
      <Sphere args={[node.size * 1.2]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={isActive ? 0.2 : 0.1}
        />
      </Sphere>
    </group>
  );
}

interface Connection {
  from: [number, number, number];
  to: [number, number, number];
}

function GraphConnection({ from, to }: Connection) {
  const ref = useRef<BufferGeometry>(null);
  
  React.useEffect(() => {
    if (ref.current) {
      const points = [new Vector3(...from), new Vector3(...to)];
      ref.current.setFromPoints(points);
    }
  }, [from, to]);
  
  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color="#00ffff" opacity={0.6} transparent />
    </line>
  );
}

interface Graph3DSceneProps {
  nodes: Node[];
  connections: Connection[];
  onNodeClick: (node: Node) => void;
  activeNodeId?: string;
}

function Graph3DScene({ nodes, connections, onNodeClick, activeNodeId }: Graph3DSceneProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
      <spotLight position={[0, 20, 0]} intensity={0.5} color="#ffffff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ParticleSystem />
      
      {connections.map((connection, index) => (
        <GraphConnection key={index} {...connection} />
      ))}
      
      {nodes.map((node) => (
        <GraphNode
          key={node.id}
          node={node}
          onClick={onNodeClick}
          isActive={activeNodeId === node.id}
        />
      ))}
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.8}
        rotateSpeed={0.4}
        minDistance={5}
        maxDistance={50}
      />
    </>
  );
}

export default function GraphUniverse() {
  const [currentGraph, setCurrentGraph] = useState<string>('main');
  const [activeNode, setActiveNode] = useState<string | undefined>();
  const [graphHistory, setGraphHistory] = useState<string[]>(['main']);
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<string | null>(null);

  // Define the main graph structure
  const mainNodes: Node[] = [
    {
      id: 'company',
      position: [0, 2, 0],
      label: 'QuantumGraph',
      color: '#00ffff',
      size: 1.5,
    },
    {
      id: 'services',
      position: [-4, 0, 2],
      label: 'Serviços',
      color: '#ff00ff',
      size: 1.2,
    },
    {
      id: 'ml',
      position: [4, 0, 2],
      label: 'Machine Learning',
      color: '#00ff00',
      size: 1.2,
    },
    {
      id: 'ai-engineering',
      position: [0, -2, 4],
      label: 'Engenharia de IA',
      color: '#ffff00',
      size: 1.2,
    },
    {
      id: 'quantum',
      position: [-2, 1, -3],
      label: 'Computação Quântica',
      color: '#ff6600',
      size: 1.0,
    },
    {
      id: 'about',
      position: [2, -1, -2],
      label: 'Sobre',
      color: '#6600ff',
      size: 1.0,
    },
  ];

  const serviceNodes: Node[] = [
    {
      id: 'back',
      position: [0, 3, 0],
      label: '← Voltar',
      color: '#666666',
      size: 0.8,
    },
    {
      id: 'data-science',
      position: [-3, 1, 1],
      label: 'Ciência de Dados',
      color: '#00ffff',
      size: 1.2,
    },
    {
      id: 'consulting',
      position: [3, 1, 1],
      label: 'Consultoria',
      color: '#ff00ff',
      size: 1.2,
    },
    {
      id: 'automation',
      position: [0, -1, 2],
      label: 'Automação',
      color: '#00ff00',
      size: 1.1,
    },
    {
      id: 'recommendation',
      position: [-2, -1, -1],
      label: 'Sistemas de Recomendação',
      color: '#ffff00',
      size: 1.1,
    },
    {
      id: 'segmentation',
      position: [2, 0, -2],
      label: 'Segmentação',
      color: '#ff6600',
      size: 1.0,
    },
  ];

  const mlNodes: Node[] = [
    {
      id: 'back',
      position: [0, 3, 0],
      label: '← Voltar',
      color: '#666666',
      size: 0.8,
    },
    {
      id: 'regression',
      position: [-3, 1, 1],
      label: 'Regressão',
      color: '#00ff00',
      size: 1.2,
    },
    {
      id: 'classification',
      position: [3, 1, 1],
      label: 'Classificação',
      color: '#00ffff',
      size: 1.2,
    },
    {
      id: 'clustering',
      position: [0, -1, 2],
      label: 'Clusterização',
      color: '#ff00ff',
      size: 1.1,
    },
    {
      id: 'prediction',
      position: [-2, -1, -1],
      label: 'Predição',
      color: '#ffff00',
      size: 1.1,
    },
    {
      id: 'experimentation',
      position: [2, 0, -2],
      label: 'Experimentação',
      color: '#ff6600',
      size: 1.0,
    },
  ];

  const aiEngineeringNodes: Node[] = [
    {
      id: 'back',
      position: [0, 3, 0],
      label: '← Voltar',
      color: '#666666',
      size: 0.8,
    },
    {
      id: 'agentic-systems',
      position: [-3, 1, 1],
      label: 'Sistemas Agênticos',
      color: '#ffff00',
      size: 1.2,
    },
    {
      id: 'chatbots',
      position: [3, 1, 1],
      label: 'Chatbots',
      color: '#00ffff',
      size: 1.2,
    },
    {
      id: 'rag',
      position: [0, -1, 2],
      label: 'RAG Systems',
      color: '#ff00ff',
      size: 1.1,
    },
    {
      id: 'graph-db',
      position: [-2, -1, -1],
      label: 'Banco de Dados em Grafo',
      color: '#00ff00',
      size: 1.1,
    },
    {
      id: 'vector-db',
      position: [2, 0, -2],
      label: 'Banco Vetorial',
      color: '#ff6600',
      size: 1.0,
    },
  ];

  const getCurrentNodes = () => {
    switch (currentGraph) {
      case 'services':
        return serviceNodes;
      case 'ml':
        return mlNodes;
      case 'ai-engineering':
        return aiEngineeringNodes;
      default:
        return mainNodes;
    }
  };

  const getConnections = (): Connection[] => {
    const nodes = getCurrentNodes();
    const connections: Connection[] = [];
    
    if (currentGraph === 'main') {
      // Connect main nodes to center
      nodes.slice(1).forEach(node => {
        connections.push({
          from: nodes[0].position,
          to: node.position,
        });
      });
    } else {
      // Connect all nodes in subgraphs
      const centerNode = nodes[1]; // Skip back button
      nodes.slice(2).forEach(node => {
        connections.push({
          from: centerNode.position,
          to: node.position,
        });
      });
    }
    
    return connections;
  };

  const handleNodeClick = (node: Node) => {
    if (node.id === 'back') {
      // Go back to previous graph
      const newHistory = [...graphHistory];
      newHistory.pop();
      setGraphHistory(newHistory);
      setCurrentGraph(newHistory[newHistory.length - 1] || 'main');
      setActiveNode(undefined);
      return;
    }

    setActiveNode(node.id);
    
    // Navigate to subgraph if available
    if (['services', 'ml', 'ai-engineering'].includes(node.id)) {
      setCurrentGraph(node.id);
      setGraphHistory([...graphHistory, node.id]);
      setActiveNode(undefined);
    } else {
      // Show info panel for other nodes
      setSelectedNodeInfo(node.id);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* UI Overlay */}
      <div className="absolute top-4 left-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
        >
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            QuantumGraph
          </h1>
          <p className="text-gray-300 text-sm">
            Navegue pelo universo de grafos interativo
          </p>
        </motion.div>
      </div>

      {/* Graph Navigation Info */}
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
        >
          <p className="text-gray-300 text-sm mb-2">
            Atual: <span className="text-cyan-400 font-semibold">{currentGraph}</span>
          </p>
          <p className="text-gray-400 text-xs">
            Clique nos nós para explorar
          </p>
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30 max-w-sm"
        >
          <h3 className="text-cyan-400 font-semibold mb-2">Controles:</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Arraste para rotacionar</li>
            <li>• Scroll para zoom</li>
            <li>• Clique nos nós para explorar</li>
            <li>• Use "Voltar" para navegar</li>
          </ul>
        </motion.div>
      </div>

      {/* Node Info Panel */}
      <NodeInfoPanel
        nodeId={selectedNodeInfo}
        onClose={() => setSelectedNodeInfo(null)}
      />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Graph3DScene
            nodes={getCurrentNodes()}
            connections={getConnections()}
            onNodeClick={handleNodeClick}
            activeNodeId={activeNode}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
