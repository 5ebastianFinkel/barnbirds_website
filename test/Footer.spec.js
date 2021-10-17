import { mount, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const link = wrapper.findComponent(RouterLinkStub)
    expect(wrapper.vm).toBeTruthy()
    expect(link.element.textContent).toBe('Impressum')
  })
})
