import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'

// Mock child components
const AppHeader = {
    template: '<div>AppHeader</div>',
}
const AppFooter = {
    template: '<div>AppFooter</div>',
}
const AboutSection = {
    template: '<div>AboutSection</div>',
}
const ExperienceSection = {
    props: ['chartData'],
    template: '<div>ExperienceSection</div>',
}
const AccomplishmentsSection = {
    template: '<div>AccomplishmentsSection</div>',
}

describe('Home', () => {
    it('renders properly', () => {
        const wrapper = mount(Home, {
            global: {
                components: {
                    AppHeader,
                    AppFooter,
                    AboutSection,
                    ExperienceSection,
                    AccomplishmentsSection,
                },
            },
        })
        expect(wrapper.text()).toContain('AppHeader')
    })

    it('renders AppHeader component', () => {
        const wrapper = mount(Home, {
            global: {
                components: {
                    AppHeader,
                    AppFooter,
                    AboutSection,
                    ExperienceSection,
                    AccomplishmentsSection,
                },
            },
        })
        expect(wrapper.findComponent(AppHeader).exists()).toBe(true)
    })

    it('renders AppFooter component', () => {
        const wrapper = mount(Home, {
            global: {
                components: {
                    AppHeader,
                    AppFooter,
                    AboutSection,
                    ExperienceSection,
                    AccomplishmentsSection,
                },
            },
        })
        expect(wrapper.findComponent(AppFooter).exists()).toBe(true)
    })

    it('passes experienceData to ExperienceSection', () => {
        const wrapper = mount(Home, {
            global: {
                components: {
                    AppHeader,
                    AppFooter,
                    AboutSection,
                    ExperienceSection,
                    AccomplishmentsSection,
                },
            },
        })
        const experienceSection = wrapper.findComponent(ExperienceSection)
        expect(experienceSection.props('chartData')).toEqual([
            { value: 9, name: 'Telecommunications' },
            { value: 8, name: 'Beverages' },
            { value: 7, name: 'Distribution' },
            { value: 2.5, name: 'Healthcare' },
            { value: 2, name: 'Industry 4.0' },
            { value: 3.5, name: 'Other' },
        ])
    })
})
