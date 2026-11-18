const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const comment = document.getElementById('clientComment').value;

    const token = "8805515077:AAHVjps1BxfbNZpITuIv0ahPOZJ29xKE7gM";
    const chatId = "1453426485";
    const text = `🏗 Нова заявка BuildAndBuilding!\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}\n📝 Об'єкт: ${comment}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Дякуємо! Вашу заявку прийнято.');
            form.reset();
        } else {
            alert('Помилка відправки. Перевірте налаштування.');
        }
    });
});