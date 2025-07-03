import { ArrowRight, Rocket } from 'lucide-react';
import BackgroundImage from '../assets/Background_image.png';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23004aad%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      {/* Tech SVG Background Image */}
      <StarsSunBackground />
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-40 scale-150"
          draggable="false"
        />
      </div>
      
      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 text-[#004aad] opacity-20">
        <Sparkles className="h-12 w-12 animate-pulse" />
      </div> */}
      {/* <div className="absolute top-40 right-20 text-blue-400 opacity-20">
        <Brain className="h-16 w-16 animate-bounce" />
      </div> */}
      <div className="absolute bottom-40 left-20 text-[#004aad] opacity-20">
        <Rocket className="h-10 w-10 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#004aad]/20 border border-[#004aad]/30 text-[#004aad] text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            State-of-the-Art AI Solutions
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004aad] to-blue-400">
              Future
            </span>{' '}
            of Software
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft intelligent software solutions and cutting-edge AI technologies 
            that transform businesses and drive innovation in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              className="group bg-[#004aad] hover:bg-[#0056cc] text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium text-lg flex items-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="group border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium text-lg flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004aad] mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004aad] mb-2">25+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004aad] mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004aad] mb-2">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function StarsSunBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const mountDiv = mount as HTMLDivElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountDiv.appendChild(renderer.domElement);

    // Create a circular texture for round, glowing stars
    function createCircleTexture(glow = 0) {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, size, size);
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 2, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = glow;
        ctx.fill();
      }
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    // Stars moving randomly
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const positions = [];
    const velocities: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      // Random position in a cube
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;
      positions.push(x, y, z);
      // Random velocity for each star
      velocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05,
      });
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, map: createCircleTexture(0), transparent: true, alphaTest: 0.5 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 10;

    let frameId: number;
    const animate = () => {
      // Move each star independently
      const pos = starsGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < starCount; i++) {
        let x = pos.getX(i) + velocities[i].x;
        let y = pos.getY(i) + velocities[i].y;
        let z = pos.getZ(i) + velocities[i].z;
        // If out of bounds, reset to random position and velocity
        if (x < -30 || x > 30 || y < -30 || y > 30 || z < -30 || z > 30) {
          x = (Math.random() - 0.5) * 60;
          y = (Math.random() - 0.5) * 60;
          z = (Math.random() - 0.5) * 60;
          velocities[i] = {
            x: (Math.random() - 0.5) * 0.05,
            y: (Math.random() - 0.5) * 0.05,
            z: (Math.random() - 0.5) * 0.05,
          };
        }
        pos.setXYZ(i, x, y, z);
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (mountDiv && renderer.domElement.parentNode === mountDiv) {
        mountDiv.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }} />;
}

export default Hero;