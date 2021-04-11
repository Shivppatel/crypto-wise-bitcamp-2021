import { CourierClient } from '@trycourier/courier';

const courier = CourierClient({
  authorizationToken: process.env.COURIER_KEY
});

const { messageId } = await courier.send({
  eventId: 'courier-quickstart',
  recipientId: 'Github_42050563',
  data: {
    favoriteAdjective: 'awesomeness'
  }
});
