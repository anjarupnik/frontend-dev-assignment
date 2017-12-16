import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-15'
import SearchIcon from './images/search.png'
import SearchForm from './SearchForm'
import ClearIcon from './images/clear.png'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

describe('SearchForm', () => {
  const wrapper = shallow(<SearchForm />)
  const form = mount(<SearchForm />)
  const instance = form.instance()
  const handleSubmit = sinon.spy(instance, 'handleSubmit')
  const setActive = sinon.spy(instance, 'setActive')

  it('is wrapped in a div with role searchbox', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.attr('role').equal('searchbox')
  })

  it('contains form with type search', () => {
    expect(wrapper.find('form')).to.have.attr('type').equal('search')
  })

  it('submits the form with given value on submit', () => {
    instance.forceUpdate()
    form.find('input').instance().value = "test"
    form.find('form').simulate('submit')
    expect(handleSubmit.callCount).to.equal(1)
    expect(form.state().value).to.equal('test')
  })

  it('contains input field with placeholder Zoeken', () => {
    expect(wrapper.find('input')).to.have.attr('placeholder').equal('Zoeken')
  })

  it('changes state to active onFocus', () => {
    expect(form.state().active).to.equal(false)
    form.find('input').simulate('focus')
    expect(setActive.callCount).to.equal(1)
    expect(form.state().active).to.equal(true)
  })

  it('has two buttons', () => {
    expect(wrapper.find('button').length).to.equal(2)
  })

  describe('buttons', () => {
    const searchForm = mount(<SearchForm />)
    const formInstance = searchForm.instance()
    const buttons = searchForm.find('button')

    describe('searchButton', () => {
      const searchButton = buttons.first()

      it('has type submit and contains searchIcon', () => {
        expect(searchButton).to.have.attr('type').equal('submit')
        expect(searchButton).to.have.exactly(1).descendants('.searchIcon')
        expect(searchButton.find('img')).to.have.attr('src').equal(SearchIcon)
      })

      it('submits the form on click', () => {
        formInstance.forceUpdate()
        searchButton.simulate('submit')
        expect(handleSubmit.callCount).to.equal(1)
      })
    })

    describe('clearButton', () => {
      const clearButton = buttons.last()

      it('has type reset and contains clearIcon', () => {
        expect(clearButton).to.have.attr('type').equal('reset')
        expect(clearButton).to.have.exactly(1).descendants('img')
        expect(clearButton.find('img')).to.have.attr('src').equal(ClearIcon)
      })

      it('it shows icon on active state', () => {
        expect(clearButton.find('img')).to.have.className('hide')
        searchForm.find('input').simulate('focus')
        expect(clearButton.find('img')).to.have.className('clearIcon')
      })
    })
  })
})
