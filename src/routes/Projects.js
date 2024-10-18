import { Card, Carousel } from "react-bootstrap";

import { CplusplusOriginal, CplusplusPlain, Css3Original, DeviconsReactOriginal, GitOriginal, GithubOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, NumpyOriginal, OpencvOriginal, PandasOriginal, PythonOriginal, PytorchOriginal, RaspberrypiOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain, VscodeOriginal} from "devicons-react";
import { SiAntdesign, SiAutodesk, SiCreality, SiEagle, SiExpress, SiLtspice, SiNvidia, SiPandas, SiScikitlearn } from "react-icons/si";
import { FaGithub, FaGithubAlt, FaNodeJs } from "react-icons/fa";

import Assembly from "../assets/wba/Complete Assembly.png";
import annotation from "../assets/wba/Control glove annotation.png";
import gui from "../assets/wba/UnityGUI.png";

import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import Ghb from "../components/Ghb";
import Pdf from "../components/pdf";

import hf from "../assets/hf-logo.png"

import "./Projects.css";
import Demo from "../components/Demo";

const Projects = () => {
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    // let scrollPosition;

    // const disableBodyScroll = () => {
    //     scrollPosition = window.scrollY;
    //     document.body.style.position = 'fixed';
    //     document.body.style.top = `-${scrollPosition}px`;
    // };

    // const enableBodyScroll = () => {
    //     document.body.style.position = '';
    //     document.body.style.top = '';
    //     window.scrollTo({top: scrollPosition, left: 0, behavior: "instant"});
    // };

    function handleHover(event){
        const element = event.target.closest(".my-card")
        element.classList.toggle('hovered');
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.style.filter = item.classList.contains("hovered") ? "none" : "blur(3px)"            
        });
    }

    function handleUnhover(event){
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.classList.remove("hovered")
            item.style.filter = "none"            
        });
    }

    const handleOpenModal = (id) => {
        // disableBodyScroll();
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-50%"
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "blur(3px)"
    };
  
    const handleCloseModal = (id) => {
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-200%";
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "none"
        // enableBodyScroll()
    };

    const handleTouchStart = (event) => {
        const containerRef = event.target.closest(".card-body")
        console.log(containerRef)
        const boundingRect = containerRef.getBoundingClientRect()
        const { clientX, clientY } = event.touches[0];
    
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${clientX - boundingRect.left}px`;
        bubble.style.top = `${clientY - boundingRect.top}px`;
    
        containerRef.appendChild(bubble);
    
        setTimeout(() => {
        containerRef.removeChild(bubble);
        }, 1000);
    }

    return (
        <div>
            <h1 className='post-nav my-header' style={{marginBottom: "20px"}}> <span className='accent-text'>Academic</span> Publications</h1>
            <div id='blur-on-modal'>
                <table>
                    <thead>
                        <tr>
                            <th>Citation  (* indicates equal contribution)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>*Ya, G., <b>*Favero, G.</b>, Luo, Z. H., Jolicoeur-Martineau, A., & Pal, C. (2024). Beyond FVD: Enhanced Evaluation
                            Metrics for Video Generation Quality. arXiv preprint arXiv:2410.05203. <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Beyond+FVD%3A+Enhanced+Evaluation+Metrics+for+Video+Generation+Quality&btnG=">[Google Scholar]</a></td>
                        </tr>
                        <tr>
                            <td>Sacchetti, L., Jianu, O., and <b>Favero, G.</b>, "Electrochemical Analysis of High-Capacity Li-Ion Pouch Cell for Automotive Applications," SAE Technical Paper 2021-01-0760, 2021, https://doi.org/10.4271/2021-01-0760. <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Electrochemical+Analysis+of+High-Capacity+Li-Ion+Pouch+Cell+for+Automotive+Applications&btnG=">[Google Scholar]</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal id={"controlnet-modal"} onClose={()=> handleCloseModal("controlnet-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                    <p><b className="keys">Abstract: </b>
                        An unofficial PyTorch implementation of ControlNet as published by Zhang et al. in "Adding Conditional Control to Text-to-Image Diffusion Models". Self-contained training code is provided for training an conditional diffusion model on Canny edges from the Smithsonian Butterflies 128x128 dataset. Equipped with HuggingFace's Accelerator wrapper for distributed training.
                        </p>
                        <p><b className="keys">Skills Learned: </b> PyTorch, NVIDIA, HuggingFace
                        </p>
                        <Ghb repo="https://github.com/faverogian/controlNet"></Ghb>
                    </div>
                </div>   
            </Modal>
            <Modal id={"simpleDiffusion-modal"} onClose={()=> handleCloseModal("simpleDiffusion-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                    <p><b className="keys">Abstract: </b>
                        An unofficial PyTorch implementation of the simple diffusion paradigm as published by Hoogeboom et al. in "Simple diffusion: End-to-end diffusion for high resolution images". Self-contained training code is provided for training an unconditional diffusion model on the Smithsonian Butterflies 128x128 dataset. Multiple versions of the U-Net architecture are available (UNet2DModel, ADM), with U-ViT and others planning to be included in the future. Equipped with HuggingFace's Accelerator wrapper for distributed training.
                        </p>
                        <p><b className="keys">Skills Learned: </b> PyTorch, NVIDIA, HuggingFace
                        </p>
                        <Ghb repo="https://github.com/faverogian/simpleDiffusion"></Ghb>
                    </div>
                </div>   
            </Modal>
            <Modal id={"ldm-modal"} onClose={()=> handleCloseModal("ldm-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Abstract: </b>
                        While deep learning models have shown immense promise and leading performance across a variety of medical imaging tasks related to Multiple Sclerosis (MS), robust and generalizable development is hindered by a barrier to large, unbiased, high-quality, and public MRI data. Generative models such as Diffusion Probabilistic Models (DDPMs) and Generative Adversarial Networks (GANs) provide a solution to this problem by generating realistic synthetic MRI images, however, existing models are yet to strike a balance between computational efficiency, training stability, and image fidelity. In this work, we apply latent diffusion models (LDM) to the task of synthetic MRI generation to show that such a balance can be achieved. We show that LDMs are able to generate high-resolution images that are anatomically plausible, unique enough to introduce diversity to the data, and have pathology consistent with MS. We then compare the performance of our LDM model to the Probabilistic Vision Group's (PVG) state-of-the-art StyleGAN model to show that the LDM is more computationally efficient to train while sacrificing marginal image fidelity in samples. In turn, the effectiveness of LDMs observed in this work demonstrates the transformative potential of computationally efficient diffusion models for high-quality synthetic MRI generation.
                        </p>
                        <p><b className="keys">Skills Learned: </b> PyTorch, NVIDIA, HuggingFace, MONAI
                        </p>
                        <Pdf repo="https://github.com/faverogian/faverogian.github.io/blob/master/src/Favero_ECSE556_FinalReport.pdf"></Pdf>
                    </div>
                </div>   
            </Modal>
            <Modal id={"emnist-classification-modal"} onClose={()=> handleCloseModal("emnist-classification-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Abstract: </b>
                        This project presents a comprehensive exploration of image analysis techniques for classification of the EMNIST dataset, designed for a 10-class classification task. We introduce a novel ensemble model of existing state-of-the-art CNN architectures to amplify feature extraction capabilities and achieve well- generalizable and robust performance on the unseen Kaggle test set. The ensemble model, comprising VGG-5 and SpinalNet, demonstrates superior performance compared to each individual model in accuracy. Further, remarkable alignment with the paper’s reported results on the EMNIST dataset confirms the fidelity of our model reproduction, underlining the effectiveness of our tailored approach for the specified classification task.
                        </p>
                        <p><b className="keys">Skills Learned: </b> Python, NumPy, PyTorch
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                            <Ghb repo="https://github.com/faverogian/ECSE551/tree/Project-3"></Ghb>
                            <Pdf repo="https://github.com/faverogian/ECSE551/blob/Project-3/VGG-5-Classifier-Outperform-on-EMNIST.pdf"></Pdf>
                        </div>
                    </div>
                </div>  
            </Modal>
            <Modal id={"subreddit-classification-modal"} onClose={()=> handleCloseModal("subreddit-classification-modal")}>     
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Abstract: </b>
                        We present a comprehensive exploration of text classification in the context of Reddit posts originating from four subreddit groups: Toronto, Paris, Montreal, and London. The class of posts from these groups is attempted to be learned using various classification models, including a Naive Bayes model constructed from scratch, and models made available via scikit-learn such as Support Vector Machines (SVM), Logistic Regression, and Random Forest. These models are coupled with a meticulous preprocessing pipeline involving, stop-word removal, lemmatization, and information gain. A detailed analysis of model performance is conducted through a 5-fold cross-validation process, revealing notable improvements with preprocessing steps such as common word removal, mutual information filtering, and word replacement. Each model demonstrates similar challenges in accurately classifying posts from the classes with similarities in linguistic and geopolitical context (e.g., Montreal versus Toronto or Paris). This challenge was best overcome with a model stacking approach that combined SVM, Logistic Regression, and Random Forest classifiers with a majority vote. This ensemble approach, combined with strict preprocessing, yielded a substantial increase in accuracy. The final model stack achieves an accuracy of 72% on the Kaggle evaluation set.
                        </p>
                        <p><b className="keys">Skills Learned: </b> Python, Scikit-learn, Pandas, HuggingFace, NLP
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                            <Ghb repo="https://github.com/faverogian/ECSE551/tree/Project-2"></Ghb>
                            <Pdf repo="https://github.com/faverogian/ECSE551/blob/Project-2/An-Ensemble-Approach-for-Reddit-Post-Classification.pdf"></Pdf>
                        </div>
                    </div>
                </div>   
            </Modal>
            <Modal id={"wba-modal"} onClose={()=> handleCloseModal("wba-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                            <Carousel.Item>
                                <img className="carousel-img" src={annotation} alt="WBA Annotation"></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-img" src={Assembly} alt="WBA Assembly" ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-img" src={gui} alt="WBA GUI"></img>
                            </Carousel.Item>
                        </Carousel>
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Abstract: </b>
                                The Wearable Biomimetic Appendage is a device that can mimic a user's hand and finger movements to aid in basic tasks. The device is composed of three main components: a control glove, a calibration and controller program, and a wearable robotic hand. The control glove uses Hall sensor-neodymium magnet pairs to track a user’s finger movements with high precision. A graphical user interface was developed to aid in calibrating the glove, making it robust to unique hand sizes and shapes. The GUI also features a virtual reality environment to validate the effectiveness of the calibration before usage with a robotic hand. The robotic hand is able to mimic the user's finger movements, providing them with a physical augmentation of their own hand. The device has the potential to be used in a variety of virtual- and real-world applications. In virtual reality, the device could be used to provide users with a more immersive virtual
                                reality control and experience. In the real world, assistance can be provided to people with finger or hand disabilities, or provide workers with a more safe way to perform tasks.
                            </p>
                            <p><b className="keys">Skills Learned: </b> Fusion360, MicroPython, C#, Soldering, Cura, Eagle, Raspberry Pi Pico
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap'}}>
                            <Demo repo="https://www.youtube.com/watch?v=UIM3DzoZ4W8"></Demo>
                            <Ghb repo="https://github.com/utepe/Capstone/tree/main"></Ghb>
                            <Pdf repo="https://github.com/utepe/Capstone/blob/main/Team12Poster.pdf"></Pdf>
                        </div>
                    </div>
                </div>  
            </Modal>
            <Modal id={"eyefollow-modal"} onClose={()=> handleCloseModal("eyefollow-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Abstract: </b>         
                            EYEfollow represents an advancement in the field of ophthalmic diagnostics, marking a departure from traditional eye assessment methods. The device harnesses the power of GazePoint eye tracking technology, seamlessly integrated with an engaging interactive user interface, to revolutionize the way eye examinations are conducted. Designed to be both lightweight and user-friendly, EYEfollow promises to simplify the diagnostic process without compromising on precision or reliability. The development of this cutting-edge tool is a collaborative effort spearheaded by the Human Systems Lab at the University of Windsor, under the expert guidance of Dr. Bala Balasingam. Dr. Moussa, a distinguished optometrist renowned throughout the Windsor-Essex area for his expertise and dedication to advancing eye care, also plays a pivotal role in this project. This partnership not only highlights the intersection of academic research and practical application but also underscores a shared commitment to enhancing eye health and vision care through innovation.
                            </p>
                            <p><b className="keys">Skills Learned: </b> Tkinter, Python, GazePoint, Pandas, C++
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                            <Ghb repo="https://github.com/faverog/EYEfollow"></Ghb>
                        </div>
                    </div>
                </div>  
            </Modal>
            <NavBar />
            <div id='blur-on-modal'>
            <h1 className='post-nav my-header' style={{marginTop: "20px", marginBottom: "10px"}}> <span className='accent-text'>Personal</span> Projects</h1>                
            <div className='card-container' style={{width: "100vw"}}>

                <Card id="controlNet" alt="controlNet" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("controlnet-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>ControlNet PyTorch Implementation</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python"></PythonOriginal>
                                    </div>
                                    <div className="devicon">
                                        <PytorchOriginal size={"20"} alt="Pytorch"></PytorchOriginal>
                                    </div>
                                    <div className="devicon">
                                    <img src={hf} alt="HuggingFace" style={{ width: '30px', height: '30px', marginTop: '5px' }}/> 
                                    </div>
                                    <div className='devicon'>
                                        <SiNvidia size="20" style={{color: 'green'}}></SiNvidia>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card> 
                <Card id="simpleDiffusion" alt="simpleDiffusion" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("simpleDiffusion-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>simple diffusion PyTorch Implementation</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python"></PythonOriginal>
                                    </div>
                                    <div className="devicon">
                                        <PytorchOriginal size={"20"} alt="Pytorch"></PytorchOriginal>
                                    </div>
                                    <div className="devicon">
                                    <img src={hf} alt="HuggingFace" style={{ width: '30px', height: '30px', marginTop: '5px' }}/> 
                                    </div>
                                    <div className='devicon'>
                                        <SiNvidia size="20" style={{color: 'green'}}></SiNvidia>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>  
                <Card id="LDM" alt="Unconditional LDM" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("ldm-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Synthetic MRI Generation with Latent Diffusion Models</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python"></PythonOriginal>
                                    </div>
                                    <div className="devicon">
                                        <PytorchOriginal size={"20"} alt="Pytorch"></PytorchOriginal>
                                    </div>
                                    <div className="devicon">
                                        <NumpyOriginal size={20} alt="NumPy"></NumpyOriginal>
                                    </div>
                                    <div className="devicon">
                                    <img src={hf} alt="HuggingFace" style={{ width: '30px', height: '30px', marginTop: '5px' }}/> 
                                    </div>
                                    <div className='devicon'>
                                        <SiNvidia size="20" style={{color: 'green'}}></SiNvidia>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="reddit" alt="subreddit-classification" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("subreddit-classification-modal")} onTouchStart={handleTouchStart}> <div className='short-info'>
                                <Card.Title>Classifying Reddit Posts using an Ensemble Approach</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python" className="python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiPandas size={"20"} alt="Pandas"></SiPandas>
                                    </div>
                                    <div>
                                        <SiScikitlearn size={20} style={{color: 'orange'}} alt="scikitlearn"></SiScikitlearn>
                                    </div>
                                    <div className='devicon'>
                                        <TensorflowOriginal size={"20"} alt="TensorFlow"></TensorflowOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="emnist" alt="emnist-classification" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("emnist-classification-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Independently Trained VGG-5 Nets Outperform on EMNIST Classification</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={20} alt="Python logo" className="python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <NumpyOriginal size={"20"} alt="NumPy"></NumpyOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <PytorchOriginal size={25} alt="SciKit Learn Logo"></PytorchOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiNvidia size="20" style={{color: 'green'}}></SiNvidia>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="wba" alt="wba" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("wba-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Wearable Biomimetic Appendage (Capstone)</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <SiAutodesk size={"20"} alt="autodesk"></SiAutodesk>
                                    </div>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiCreality size="20"></SiCreality>
                                    </div>
                                    <div className='devicon'>
                                        <RaspberrypiOriginal size={"20"} alt="CSS"></RaspberrypiOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="eyefollow" alt="eyefollow" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("eyefollow-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>EYEfollow</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <CplusplusOriginal size={20} alt="C++"></CplusplusOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <PythonOriginal size={20} alt="Python Logo"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiPandas size={20} alt="Pandas"></SiPandas>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={20} style={{color: '#6e5494'}} alt="vscode"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Projects