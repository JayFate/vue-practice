import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Header, Aside, Main } from 'element-ui'

;[Button, Form, FormItem, Input, Container, Header, Aside, Main].forEach((comp) => Vue.use(comp))

Vue.prototype.$message = Message
