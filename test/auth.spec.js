import axios from 'axios';
import { XMLHttpRequest } from 'xmlhttprequest';

global.XMLHttpRequest = XMLHttpRequest;

describe('user resolvers', () => {
  test('User Authentication', async () => {
    const response = await axios.post('http://localhost:5000/graphql', {
      query: `
      mutation{
        createUser(userInput:{firstName:"Testuser",lastName:"Dk",email:"xyz@testuser.com",password:"abc123",phone:"2324367"}){
          email
        }
      }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        createUser: {
          email: 'abc@testuser.com',
        },
      },
    });

    const response2 = await axios.post('http://localhost:5000/graphql', {
      query: `
      mutation {
        login(email: "xyz@testuser.com", password: "abc123") {
          token
        }
      }
      `,
    });

    const {
      data: {
        login: { token },
      },
    } = response2.data;

    const response3 = await axios.post(
      'http://localhost:5000/graphql',
      {
        query: `
        query{
            loadUser{
              
              firstName,
              lastName,
              phone,
              email
            }
          }
      `,
      },
      {
        headers: {
          'x-auth-token': `Bearer ${token}`,
        },
      }
    );

    expect(response3.data).toMatchObject({
      data: {
        loadUser: {
          firstName: 'Testuser',
          lastName: 'Dk',
          phone: '2324367',
          email: 'xyz@testuser.com',
        },
      },
    });
  });

  // test('get all events', async () => {
  //   const response = await axios.post(
  //     'http://localhost:5000/graphql',
  //     {
  //       query: `
  //     query {
  //       events {
  //         _id
  //         title
  //         description
  //         date
  //         price
  //         creator {
  //           _id
  //           email
  //         }
  //       }
  //     }
  //     `,
  //     },
  //     {
  //       headers: {
  //         'x-auth-token': `Bearer ${token}`,
  //       },
  //     }
  //   );

  //   const { data } = response;
  //   expect(data).toMatchObject({
  //     data: {
  //       events: {
  //         data: {
  //           events: [
  //             {
  //               _id: '60f7aae8d4080c3c33fd3f05',
  //               title: 'contact',
  //               description: 'dsd',
  //               date: '2021-07-14T05:04:00.000Z',
  //               price: 2,
  //               creator: {
  //                 _id: '60e11293c00f7f1ecbdecffb',
  //                 email: 'ishara.asdk@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7ab40d4080c3c33fd3f0d',
  //               title: 'kat',
  //               description: 'rgrg',
  //               date: '2021-07-07T05:06:00.000Z',
  //               price: 44,
  //               creator: {
  //                 _id: '60e11293c00f7f1ecbdecffb',
  //                 email: 'ishara.asdk@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b2f0751cbc4121ed86a6',
  //               title: 'Should work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60e11293c00f7f1ecbdecffb',
  //                 email: 'ishara.asdk@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b3ad8d7fec4153d12bd3',
  //               title: 'Should work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60e11293c00f7f1ecbdecffb',
  //                 email: 'ishara.asdk@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b3fd24afe9415d8e080c',
  //               title: 'Should work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60e11293c00f7f1ecbdecffb',
  //                 email: 'ishara.asdk@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b5462774024168bf3b10',
  //               title: 'Should work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60f7b4ff2774024168bf3b0d',
  //                 email: 'abc@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b54f2774024168bf3b15',
  //               title: 'hjgjgfjvgj work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60f7b4ff2774024168bf3b0d',
  //                 email: 'abc@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b585151eca4185b05612',
  //               title: 'hjgjgfjvgj work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60f7b4ff2774024168bf3b0d',
  //                 email: 'abc@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '60f7b60d151eca4185b05616',
  //               title: 'hjgjgfjvgj work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60f7b4ff2774024168bf3b0d',
  //                 email: 'abc@gmail.com',
  //               },
  //             },
  //             {
  //               _id: '610290e787188008951ba9d1',
  //               title: 'hjgjdsdsdsddgfjvgj work',
  //               description: 'des ',
  //               date: '2018-12-13T09:51:23.077Z',
  //               price: 233.22,
  //               creator: {
  //                 _id: '60f7b4ff2774024168bf3b0d',
  //                 email: 'abc@gmail.com',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   });
  // });
});
