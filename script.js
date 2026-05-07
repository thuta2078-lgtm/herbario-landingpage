function sendMessage(){

  let input = document.getElementById("userInput");

  let chatBody = document.getElementById("chatBody");

  let message = input.value.toLowerCase();

  if(message.trim() === ""){
    return;
  }

  chatBody.innerHTML += `
    <div class="bot-message">
      <strong>Bạn:</strong> ${message}
    </div>
  `;

  let reply = "HERBARIO sẽ hỗ trợ bạn ngay 🌿";

  if(message.includes("giá")){
    reply = "HERBARIO hiện có giá ưu đãi 299.000đ/chai.";
  }

  else if(message.includes("công dụng")){
    reply = "HERBARIO giúp giảm gãy rụng, giảm gàu và phục hồi tóc hư tổn.";
  }

  else if(message.includes("đặt hàng")){
    reply = "Bạn chỉ cần điền form đặt hàng phía dưới.";
  }

  else if(message.includes("ship")){
    reply = "HERBARIO hỗ trợ giao hàng toàn quốc.";
  }

  else if(message.includes("thành phần")){
    reply = "HERBARIO gồm bồ kết, hà thủ ô và tinh dầu bưởi.";
  }

  else if(message.includes("thuần chay")){
    reply = "HERBARIO đạt tiêu chuẩn thuần chay an toàn.";
  }

  chatBody.innerHTML += `
    <div class="bot-message">
      ${reply}
    </div>
  `;

  input.value = "";

  chatBody.scrollTop = chatBody.scrollHeight;
}
