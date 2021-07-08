<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import { Navbar } from '../index'
    import '../style.css'
</script>

<Meta
        argTypes={{}}
        component={Navbar}
        title="Example/Page"
/>

<Template let:args>
    <Navbar/>
    <main class='container'>
        <h1>Hello World!</h1>
    </main>
</Template>

<Story
        args={{}}
        name="Default"
/>