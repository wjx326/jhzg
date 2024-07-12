import { defineStore } from 'pinia';  
  
export const useMessageStore = defineStore('message', {  
  state: () => ({  
    // 初始化消息列表为空数组  
    messages: [],  
    // 假设这是用于头像的URL，你可以根据需要从API或其他地方获取  
    circleUrl: 'https://example.com/avatar.png',  
  }),  
  actions: {    
    loadMoreMessages(count = 10) {  
      // 这里只是一个示例，实际应用中你可能需要从API获取数据  
      // 假设我们简单地添加一些模拟数据到messages数组  
      for (let i = 0; i < count; i++) {  
        const newMessage = {  
          id: this.messages.length + 1, 
          avatarUrl:'https://example.com/avatar.png',
          storename: `Store ${this.messages.length + 1}`, 
          detail:
            [
            {description: `This is a description for product1.`,
            time:  `2023-12-01 10:00`},
            {description: `This is a description for product2.`,
            time:  `2023-12-01 10:00`},
            {description: `This is a description for product3.`,
            time:  `2023-12-01 10:00`},
            {description: `This is a description for product4.`,
            time:  `2023-12-01 10:00`}
            ],
            
        };  
        this.messages.push(newMessage);  
      }  
    },  
  },  
  getters: {  
    // 你可以在这里定义getters来获取处理过的数据  
    // 例如，获取所有消息  
    getAllMessages: (state) => state.messages,  
  },  
});