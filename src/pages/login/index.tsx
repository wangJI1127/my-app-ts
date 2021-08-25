import React from "react";
import {Button} from "antd";

export const LoginPage = () => {
    return <form>
        <div>
            <label>用户名</label>
            <input type="text"/>
        </div>
        <div>
            <label>密码</label>
            <input type="password"/>
        </div>
        <div>
            <Button type="primary">Login</Button>
        </div>
    </form>
}
