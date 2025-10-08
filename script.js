// Skills data for the modal
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
    },
    'languages': {
        icon: '🌐',
        title: 'Languages',
        skills: [
            'English - Solid',
            'Swedish - Intermediate', 
            'Tamil - Native'
        ]
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('skillModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalSkills = document.getElementById('modalSkills');
    const closeModal = document.querySelector('.close-modal');

    // Check if modal elements exist
    if (!modal || !modalIcon || !modalTitle || !modalSkills || !closeModal) {
        console.error('Modal elements not found!');
        return;
    }

    console.log('Modal elements found:', {modal, modalIcon, modalTitle, modalSkills, closeModal});

    // Open modal when category is clicked
    document.querySelectorAll('.skill-category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('Card clicked:', category);
            openModal(category);
        });
    });

    // Close modal
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close modal when clicking outside
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
        
        if (!data) {
            console.error('No data found for category:', category);
            return;
        }
        
        console.log('Opening modal with data:', data);
        
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    console.log('Skills modal script loaded successfully!');
    console.log('Available categories:', Object.keys(skillsData));
});
