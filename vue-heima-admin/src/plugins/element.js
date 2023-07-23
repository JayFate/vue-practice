import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui';

[Button, Form, FormItem, Input].forEach((comp) => Vue.use(comp))

Vue.prototype.$message = Message
