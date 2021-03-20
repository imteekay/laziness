import compareCoverage from '../index'

declare const global

describe('compareCoverage', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
    global.markdown = jest.fn()
  })

  afterEach(() => {
    global.warn = undefined
    global.message = undefined
    global.fail = undefined
    global.markdown = undefined
  })

  it('checks for a that message has been called', () => {
    global.danger = {
      github: { pr: { title: 'My Test Title' } },
    }

    const prPath = '../src/tests/coverage-summary.json'
    const masterPath = '../src/tests/coverage-summary-master.json'
    compareCoverage({ prPath, masterPath })

    expect(global.message).toHaveBeenCalledWith('PR Title: My Test Title')
  })
})
