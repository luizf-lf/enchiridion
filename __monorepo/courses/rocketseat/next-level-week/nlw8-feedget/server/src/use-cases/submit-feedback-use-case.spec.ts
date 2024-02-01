import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

// spy functions - they "spy" if a function has been called
const createFeedbackSpy = jest.fn();
const SendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: SendMailSpy }
);

// describes a test suite (a test suite can hold many individual tests)
describe('Submit Feedback', () => {
  it('Should be able to submit a feedback', async () => {
    // expects the async function (promise) to be resolved and to do not throw any errors
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdf1234512hij',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(SendMailSpy).toHaveBeenCalled();
  });

  it('Should not be able to send a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdf1234512hij',
      })
    ).rejects.toThrow();
  });

  it('Should not be able to send a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,asdf1234512hij',
      })
    ).rejects.toThrow();
  });

  it('Should not be able to send a feedback without an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'test comment',
        screenshot: 'test.png',
      })
    ).rejects.toThrow();
  });
});
