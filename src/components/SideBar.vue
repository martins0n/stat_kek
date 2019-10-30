<template>
  <sidebar-menu 
    :menu="menu"
    :collapsed="collapsed" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        href: '/',
                        title: 'HelloWorld',
                        icon: 'fas fa-angle-right'
                    },
                    {
                        href: '/beta_vs_normal',
                        title: 'Beta vs Normal',
                        icon: 'fas fa-angle-right'
                    },
                    {
                        href: '/line_draw',
                        title: 'Line Draw',
                        icon: 'fas fa-angle-right'
                    }
                ],
                collapsed: true
            }
        }
        
    }
</script>