import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import SearchForm from './SearchForm'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

describe('SearchForm', () => {
  const wrapper = shallow(<SearchForm />)

  it('is wrapped in a div with role searchbox', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.attr('role').equal('searchbox')
  })

  it('contains form with type search', () => {
    expect(wrapper.find('form')).to.have.attr('type').equal('search')
  })

  it('contains input field with placeholder Zoeken', () => {
    expect(wrapper.find('input')).to.have.attr('placeholder').equal('Zoeken')
  })

  it('contains button with type submit and SearchIcon', () => {
    const button = wrapper.find('button')
    expect(button).to.have.attr('type').equal('submit')
    expect(button).to.have.exactly(1).descendants('.searchIcon')
  })
})
