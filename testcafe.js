import { Selector } from 'testcafe';

fixture `Listen With`
  .beforeEach(async t => {
    await t.navigateTo('https://www.seleniumhq.org/');
  });

const header = Selector('div#header a');

test('Get Header', async t => {
  await t
    .expect(header.innerText).eql('Browser Automation');
});