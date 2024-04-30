import React from 'react';
import { useRef, useEffect } from "react";
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Center } from '@react-three/drei';
import Layout from "../../components/layout"
import * as styles from '../../components/index.module.css';

const Model = () => {
    const groupRef = useRef();  // Create a ref for the group
    const { scene, animations } = useGLTF('/models/final-3.glb');
    const { actions, mixer } = useAnimations(animations, groupRef);  // This hook binds animations to the group

    useEffect(() => {
        actions[Object.keys(actions)[0]].play();  // Play the first animation
        return () => mixer.stopAllAction();  // Stop all animations on component unmount
    }, [actions, mixer]);

    scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
    });

    return (
        <Center>
            <primitive object={scene} ref={groupRef} scale={new Array(3).fill(0.4)} receiveShadow castShadow />
        </Center>
    )
};

function Camera() {
    const { camera } = useThree();
    camera.fov = 75;  // Field of view
    camera.position.set(0, -1.3, 5);  // Position camera above and back a bit
    camera.lookAt(0, 0, 0);  // Point the camera at the center of the scene
    camera.updateProjectionMatrix();
    return null;
}

const AboutProject = () => {
    return (
    <div className={`${styles.aboutText} ${styles.fullHeight}`}>
        <span className={styles.sectionNumber}><strong>DSGN-0010 Final Project</strong></span>
        <h1>Infinite Pursuit</h1>
        <p>A digital sculpture exploring gym culture and the endless pursuit of improvement</p>
    </div>
    )
}

const CustomSection1 = () => {
    return (
    // insert padding at bottom
    <div style={{ paddingBottom: '10rem', paddingTop: '10rem'}}>
        <div className={styles.narrowContainer}>
            <div className={`${styles.aboutText} ${styles.center}`}>
                <span className={styles.sectionNumber}><strong>01. Project Concept</strong></span>
                <p><br></br>
                    This project explores the concept of gym culture as a ritualistic, almost religious experience, framed within the context of the ancient Greek tradition of physical competition.
                    I wanted to explore the gym as a place of both physical and mental transformation, as well as the nature of competition within fitness culture.
                    There are a few core themes I wanted to explore in this project:
                </p>
                <br></br>
                    <p><li><strong>Ritual and Routine: </strong>exploring the gym as a sacred ritual that is part of a person's daily routine</li></p>
                    <p><li><strong>Competition: </strong>exploring the motivational and toxic aspects of competition and comparisons</li></p>
                    <p><li><strong>Continuous Pursuit of Improvement: </strong>exploring human physical limits, the paradox of neverending improvement, and the continuous effort needed to stay at the top of the competition</li></p>
            </div>
        </div>
    </div>
    )
}

const CustomSection2 = () => {
    return (
        <div style={{ paddingBottom: '10rem' }}>
            <div className={styles.narrowContainer}>
            <div className={`${styles.aboutText} ${styles.center}`}>
                <span className={styles.sectionNumber}><strong>02. Development Process</strong></span>
                <p><br></br>
                    The development process for this project can be described in terms of ideation and iteration.
                    <br></br>
                    <br></br>
                    <strong>Ideation:</strong>
                    <br></br>I took inspiration from both historical elements (ancient Olympics) and contemporary phenomena (social media fitness influencers).
                    Inspired by traditional greek sculptures, as well as the idea of the ideal human form. During the ideation phase,
                    I was having a lot of trouble deciding on a concrete direction to take my idea. I found that constraining my medium to 3D modeling
                    specifically helped me generate a lot of prototypical ideas.
                    <br></br>
                    <br></br>
                    <strong>Iteration:</strong>
                    <br></br> While I knew that I wanted my project to take the form of a blender model, the actual object of the model changed 
                    a lot during the development process. I initially wanted to create a speculative design for a gym of the future, but I quickly
                    realized that this project was too ambitious for my time frame and my skill level. I then decided to focus on modeling a single
                    object that embodied the themes I wanted to explore.
                    In my final iteration, I decided to create a blender model in the style of a traditional greek sculpture. My vision was to
                    create a classical-style sculpture wearing an ouroboro in place of a laurel wreath. The ouroboro symbolizes the infinite pursuit
                    of human limits in the gym, and the context of the sculpture embodies the spirit and history of physical competition.
                </p>
            </div>
            </div>
        </div>
    )
}

const CustomSection3 = () => {
    return (
        <div style={{ paddingBottom: '10rem' }}>
            <div className={styles.narrowContainer}>
            <div className={`${styles.aboutText} ${styles.center}`}>
                <span className={styles.sectionNumber}><strong>03. Material Choice</strong></span>
                <p><br></br>
                    The 3D model was created in Blender and displayed on a webpage created with the React javascript framework.
                    <br></br>
                    <br></br>
                    <strong>Medium: 3D modeling in Blender</strong>
                    <br></br>
                    The 3D model was created in Blender, a free and open-source 3D modeling software. I chose 3D modeling because I wanted to gain more experience in the medium.
                    I have some prior experience in 3D modeling within a robotics and 3D printing context, but not in an artistic setting. I wanted to apply the perspective of concept-first
                    exploration to my project, and I thought that 3D modeling would be a good medium to explore that idea. The actual development of the model
                    was difficult, as anticipated, but it provided a good learning experience on the blender sculpting tools.
                    I also ran short on time and didn't have the opportunity to create my own ouroboro model with animations and the level of detail I wanted. I decided to use a free model from Sketchfab
                    (that allowed for usage upon attribution) and modify it to fit my project.
                    <br></br>
                    <br></br>
                    <strong>Medium: The Internet</strong>
                    <br></br>
                    The model is displayed on a webpage using the `@react-three/fiber` and `@react-three/drei` libraries.
                    This creates for an interactive experience where a user can interactively view the model from multiple angles
                    and distances. This display format also allows for easy viewing of the ouroboro animation, as well as easy
                    lighting customization using javascript. The webpage format also allows for easy sharing of the project with others.
                </p>
            </div>
            </div>
        </div>
    )
}

const CustomSection4 = () => {
    return (
        <div style={{ paddingBottom: '10rem' }}>
            <div className={styles.narrowContainer}>
            <div className={`${styles.aboutText} ${styles.center}`}>
                <span className={styles.sectionNumber}><strong>04. Artistic Inspiration & Course Concepts</strong></span>
                <p><br></br>
                During the development of this project, I was heavily inspired by Laurie Anderson's interview 'Advice to the Young',
                where she talks about the importance of being 'multimedia' in art as a way to expand your creative horizons.
                Her advice to young artists is to not be limited by the medium, but to use the medium to express the concept. This advice was very
                influential in my decision to try out an unfamiliar medium for my final project. While I wasn't truly satisfied with how my model
                initially turned out as a sole 3D model, I found drawing on my experience in web development to integrate that model into a webpage
                with custom lighting made it a lot more satisfying to me. By using React to display the model on a persistent place online,
                I was able to improve upon the final output in a way that was more familiar to me.
                <br></br>
                <br></br>
                I was also inspired by the class' Dada animation project, and how we were tasked to have our animations create a seamless
                infinite loop. This animation challenge was what led me to the idea of the ouroboro and using animation as a way to display infinite pursuit.
                <br></br>
                <br></br>
                Foundational design principles used: 
                - balance/symmetry to emphasize the classical Greek ideals in the sculpture’s form 
                - Contrast: Using drastic light and shadow in the digital presentation to enhance the model’s features. The lighting also mimics
                the ideal lighting conditions for a bodybuilding competition.
                </p>
            </div>
            </div>
        </div>
    )
}

const FinalProject = () => {
    return (
        <Layout>
            {/* intro slide */}
            <AboutProject />
            {/* <p>This project was developed for DSGN-0010 (Art, Design, and Digital Culture) at the University of Pennsylvania.</p> */}
            <div>
                <div style={{ height: '100vh', width: '50vw', margin: 'auto'}}>
                    <Canvas fog={{ type: 'FogExp2', args: ['#cacaca', 0.1] }}>
                        <Camera />
                        <OrbitControls maxPolarAngle={Math.PI / 1.5} target={[0, 0, 0]} maxDistance={15} minDistance={0.5} 
                            enablePan={true} enableZoom={true} enableRotate={true}/>
                        <ambientLight intensity={0.35} />
                        <pointLight position={[0, 0, 0]} intensity={13} distance={50} />
                        {/* blue */}
                        <pointLight position={[-0.15, 1, 2]} color="#AEF3E7" intensity={0.25} distance={50} decay={3} />
                        {/* red */}
                        <pointLight position={[3, 2, 2]} color="#e95800" intensity={10} distance={50} decay={2} />
                        {/* yellow */}
                        <pointLight position={[0.15, -2, -5]} color="#F3DE8A" intensity={5} distance={50} decay={2} />
                        <Model />
                    </Canvas>
                </div>
            </div>
            
            <div className={`${styles.aboutText} ${styles.center}`}>
            <span className={styles.sectionNumber}>0. Attributions</span>
                <p><strong>Note: this project uses an external model for the ouroboro</strong></p>
                <p>"Ouroboros The Calm" (<a href='https://skfb.ly/oCOZT' target="_blank">https://skfb.ly/oCOZT</a>) by tamminen is licensed under Creative Commons Attribution (<a href='http://creativecommons.org/licenses/by/4.0/' target="_blank">http://creativecommons.org/licenses/by/4.0/</a>).</p>
            </div>
            {/* project concept and themes */}
            <CustomSection1 />
            <CustomSection2 />
            <CustomSection3 />
            <CustomSection4 />

            
        </Layout>
    );
};

useGLTF.preload('/models/final.glb');

export default FinalProject;
