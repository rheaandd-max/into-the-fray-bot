// Simple chatbot responses
    const responses = {
        'hello': 'Hello! How can I assist you with data mining today?',
        'hi': 'Hi there! What data would you like to analyze?',
        'help': 'I can help you with data analysis, pattern recognition, and data mining tasks. What specific help do you need?',
        'analyze': 'I can analyze various types of data. Please provide more details about what you want to analyze.',
        'data': 'I specialize in data mining and analysis. What kind of data are you working with?',
        'default': 'I understand you want to know about that. Could you provide more specific details about your data mining needs?'
    };
    
    function sendMessage() {
        const input = document.getElementById('userInput');
        const message = input.value.trim();
        
        if (message === '') return;
        
        // Display user message
        addMessage(message, 'user');
        
        // Clear input
        input.value = '';
        
        // Generate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    function addMessage(text, sender) {
        const chatContainer = document.getElementById('chatContainer');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'user') {
            messageDiv.innerHTML = `<strong>You:</strong> ${text}`;
        } else {
            messageDiv.innerHTML = `<strong>Bot:</strong> ${text}`;
        }
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const key in responses) {
            if (lowerMessage.includes(key)) {
                return responses[key];
            }
        }
        
        return responses.default;
    }
    
    // Allow Enter key to send message
    document.getElementById('userInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });