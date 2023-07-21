import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui';

[Button, Form, FormItem, Input].forEach((comp) => Vue.use(comp))
