// Hàm ẩn/hiện cửa sổ chat
function toggleAIChat() {
    const chatWin = document.getElementById('aiChatWindow');
    chatWin.style.display = (chatWin.style.display === 'none' || chatWin.style.display === '') ? 'flex' : 'none';
}

// Hàm xử lý khi bấm nút lựa chọn nhanh
function sendQuickOption(optionText) {
    appendMessage(optionText, 'user-message');
    
    // AI phản hồi tự động dựa trên nút bấm
    setTimeout(() => {
        let botResponse = "Cảm ơn bạn đã quan tâm! ";
        if(optionText === 'Giải pháp mọc tóc') botResponse += "Herbario có tinh chất vỏ bưởi đậm đặc giúp kích thích mọc tóc sau 14 ngày dùng.";
        if(optionText === 'Combo ưu đãi') botResponse += "Hiện combo gội xả bưởi đang giảm giá 30% cho khách hàng mới đó ạ.";
        if(optionText === 'Tư vấn da đầu') botResponse += "Bạn vui lòng để lại số điện thoại, chuyên gia sẽ gọi tư vấn tình trạng da đầu cho bạn nhé.";
        
        appendMessage(botResponse, 'bot-message');
    }, 800);
}

// Hàm thêm tin nhắn vào màn hình
function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = className;
    msgDiv.innerText = text;
    document.getElementById('aiChatMessages').appendChild(msgDiv);
    document.getElementById('aiChatMessages').scrollTop = document.getElementById('aiChatMessages').scrollHeight;
}
