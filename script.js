function sendMessage(){

  let input = document.getElementById("userInput");

  let chatBody = document.getElementById("chatBody");

  let text = input.value.toLowerCase();

  if(text.trim() === ""){
    return;
  }

  chatBody.innerHTML += `
    <div class="bot-message">
      <strong>Bạn:</strong> ${text}
    </div>
  `;

  let reply = "HERBARIO sẽ hỗ trợ bạn ngay 🌿";

  if(text.includes("giá")){
    reply = "HERBARIO hiện có giá ưu đãi 299.000đ/chai.";
  }

  else if(text.includes("công dụng")){
    reply = "HERBARIO giúp giảm gãy rụng, sạch gàu và phục hồi tóc hư tổn.";
  }

  else if(text.includes("đặt hàng")){
    reply = "Bạn chỉ cần điền form đặt hàng bên dưới.";
  }

  else if(text.includes("ship")){
    reply = "HERBARIO hỗ trợ giao hàng toàn quốc.";
  }

  else if(text.includes("thành phần")){
    reply = "HERBARIO gồm bồ kết, hà thủ ô và tinh dầu bưởi.";
  }

  setTimeout(() => {

    chatBody.innerHTML += `
      <div class="bot-message">
        ${reply}
      </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;

  }, 700);

  input.value = "";

}
