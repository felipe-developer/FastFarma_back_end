const { test, trait} =use('Test/Suite')('Session');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait('Test/ApiClient')

test('it should return JWT token when session create', async ({assert, client}) =>{
  const SessionPayload = {
    email: 'luizfelipe.farias@hotmail.com',
    password: '86271685'
  }
  const user = await Factory
    .model('App/Models/Users')
    .create(SessionPayload);

  const response = await client
  .post('/sessions')
  .send(SessionPayload).end()

  console.log(response.body.token);
  response.assertStatus(200);
  assert.exists(response.body.token)
});