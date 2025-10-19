const user = {
    name: 'Кирило',
    age: 31,
    hobbies: ['покер', 'стрільба з лука', 'настільні ігри'],
    address: {
        city: 'Дніпро',
        street: 'Зорянний',
        house: '1M'
    },
    showInfo: function () {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
        console.log('Хобі:', this.hobbies.join(', '));
        console.log(`Адреса: ${this.address.city}, бульвар ${this.address.street}, буд. ${this.address.house}`);
    }
};

user.showInfo();
