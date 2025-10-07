// Skills data
const skillsData = {
    'ai-ml': {
        icon: '🤖',
        title: 'AI & Machine Learning',
        skills: [
            'Machine Learning', 'Deep Learning', 'Natural Language Processing',
            'Computer Vision', 'Generative AI', 'Large Language Models',
            'Transformers', 'RAG', 'Named Entity Recognition',
            'Federated Learning', 'Differential Privacy', 'Object Detection',
            'Image Classification', 'Image Segmentation', 'Sentiment Analysis'
        ]
    },
    'programming': {
        icon: '💻',
        title: 'Programming & Tools',
        skills: [
            'Python', 'SQL', 'Linux', 'Docker', 'Kubernetes',
            'GitHub', 'Unreal Engine 5', 'Tableau', 'Power BI', 'Excel'
        ]
    },
    'frameworks': {
        icon: '📚',
        title: 'ML Frameworks & Libraries',
        skills: [
            'Pandas', 'Scikit-Learn', 'TensorFlow', 'PyTorch',
            'Hugging Face', 'OpenCV', 'Keras', 'Streamlit',
            'LlamaIndex', 'FastAPI', 'Flask', 'RESTful APIs'
        ]
    },
    'data': {
        icon: '📊',
        title: 'Data Analytics',
        skills: [
            'Data Analysis', 'Data Visualization', 'Exploratory Data Analysis',
            'Business Understanding', 'Feature Engineering', 'Time Series Analysis',
            'ETL Processes', 'Data Cleaning', 'Data Wrangling',
            'Statistical Analysis', 'Data Interpretation', 'Data Mining',
            'Data Modeling'
        ]
    },
    'cloud': {
        icon: '☁️',
        title: 'Cloud Platforms',
        skills: [
            'Wasabi',
            'AWS S3', 
            'Azure DevOps'
        ]
    }
};

// Modal functionality
const modal = document.getElementById('skillModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSkills = document.getElementById('modalSkills');
const closeModal = document.querySelector('.close-modal');

// Open modal when category is clicked
document.querySelectorAll('.skill-category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        openModal(category);
    });
});

// Close modal
closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModalFunc();
    }
});

function openModal(category) {
    const data = skillsData[category];
    
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    
    // Clear previous skills
    modalSkills.innerHTML = '';
    
    // Add skills to modal
    data.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item-modal';
        skillElement.innerHTML = `<span>${skill}</span>`;
        modalSkills.appendChild(skillElement);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
    
