import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'

;[Button, Form, FormItem, Input, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem].forEach((comp) => Vue.use(comp))

Vue.prototype.$message = Message
