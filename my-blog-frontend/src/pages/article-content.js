const articles = [
    {
        name: 'Pacman Game',
        title: 'Pacman game using Spark Java',
        content: [
            `The Pacman game is a classic arcade-style game that you built using the Spark Java framework, 
            which is known for its simplicity and lightweight architecture for building web applications. 
            The goal of your project was to create an interactive, browser-based version of the Pacman game 
            while leveraging Java's power through the Spark framework.`,
            
            `Backend: Spark Java (for handling HTTP requests and responses).
            Frontend: JavaScript, HTML/CSS (for rendering the game and handling user input).
            Game Logic: Java (for defining the game mechanics, rules, and logic).
            Rendering: JavaScript and Canvas (for displaying the game grid, Pacman, and ghosts).`,
            
            `Your Pacman game includes the core mechanics of the original game:
            - Player Movement: Players can move Pacman in four directions (up, down, left, right) using keyboard inputs.
            - Ghost Movement: The game includes AI-driven ghost enemies that move within the grid, trying to capture Pacman.
            - Pellets and Power-Ups: Pacman can eat pellets scattered across the maze, and power pellets allow Pacman to eat the ghosts temporarily.`,
        ]
    },  {
        name: 'BLIP Captioning Project',
        title: 'Image Captioning using BLIP (Bootstrapping Language-Image Pretraining)',
        content: [
            `The BLIP Captioning Project is focused on generating descriptive captions for images by leveraging the BLIP (Bootstrapping Language-Image Pretraining) model. 
            This model integrates vision and language processing to produce accurate and contextually rich descriptions of images. 
            The goal of the project is to automate the process of generating captions, which can be useful for accessibility, content creation, and social media tagging.`,
            
            `Backend: Python (for model training and inference).
            Libraries: BLIP (for image captioning), Hugging Face Transformers, PyTorch (for model implementation), Pandas (for data handling).
            Dataset: A large dataset of images and corresponding captions, sourced from publicly available datasets like MS COCO or Flickr30k.
            Model: BLIP combines image processing and language modeling to generate captions that describe the content and context of images.`,
            
            `Core features of the project:
            - Image Preprocessing: The project uses image preprocessing techniques to standardize the input images before feeding them into the BLIP model.
            - Caption Generation: BLIP generates captions by analyzing both the visual elements and context of the image.
            - Fine-Tuning: The model can be fine-tuned on specific datasets to improve the relevance and accuracy of the captions for specialized use cases.
            - Use Cases: The captions can be used for accessibility (for visually impaired users), automating social media tagging, or assisting in content creation workflows.`,
        ]
    },   {
        name: 'Instagram Engagement Predictor',
        title: 'Instagram Engagement Prediction using YOLOv8 and LSTM',
        content: [
            `The Instagram Engagement Predictor is a project that leverages deep learning techniques to predict engagement on Instagram posts. 
            The project combines object detection using YOLOv8 and time series analysis using LSTM (Long Short-Term Memory) networks. 
            It aims to analyze visual content and temporal patterns to forecast engagement metrics such as likes, comments, and shares.`,
            
            `Backend: Python (for training and evaluating models).
            Libraries: YOLOv8 (for object detection), LSTM (for time series analysis), PyTorch, Pandas, Scikit-learn.
            Dataset: Instagram posts (images, captions, timestamps, and engagement metrics).
            Model: YOLOv8 is used to detect objects in Instagram images, and LSTM processes the temporal data to predict future engagement.`,
            
            `Core features of the project:
            - Object Detection: YOLOv8 is used to detect various objects in Instagram images, which can influence engagement (e.g., people, products, scenery).
            - Time Series Analysis: LSTM models are used to analyze the sequence of posts over time and predict engagement based on historical data.
            - Engagement Metrics: The model predicts likes, comments, and shares, allowing content creators to optimize their posts for higher engagement.
            - Data Preprocessing: The project includes cleaning and normalizing the Instagram data, extracting relevant features for training the models.`,
        ]
    }, 
];

export default articles;