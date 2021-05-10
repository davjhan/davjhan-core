<script>
  import '../style.css'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Navbar } from '../index'
  import Banner from '../components/Banner.svelte'
</script>

<Meta
  title="Example/Page"
  component={Banner}
  argTypes={{}}
/>

<Template let:args>
  <Navbar/>
  <Banner/>
</Template>

<Story
  name="Default"
  args={{}}
/>