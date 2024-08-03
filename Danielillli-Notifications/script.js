function createNotification(type, title, message) {
    const container = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const textContainer = document.createElement('div');
    textContainer.className = 'notification-text';

    const titleElement = document.createElement('div');
    titleElement.className = 'notification-title';
    titleElement.textContent = title;

    const messageElement = document.createElement('div');
    messageElement.className = 'notification-message';
    messageElement.textContent = message;

    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';
    closeButton.onclick = () => {
        notification.classList.add('hidden');
        setTimeout(() => container.removeChild(notification), 300);
    };

    textContainer.appendChild(titleElement);
    textContainer.appendChild(messageElement);
    notification.appendChild(textContainer);
    notification.appendChild(closeButton);
    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hidden');
        setTimeout(() => container.removeChild(notification), 300);
    }, 5000);
}

function showSuccessNotification() {
    createNotification('success', 'Success', 'This is a success notification. You rock!');
}

function showErrorNotification() {
    createNotification('error', 'Error', 'This is an error notification. Don\'t worry, it\'s not your fault!');
}

function showWarningNotification() {
    createNotification('warning', 'Warning', 'This is a warning notification. Be cautious!');
}

function showRegularNotification() {
    createNotification('regular', 'Notice', 'This is a regular notification. Just FYI.');
}
