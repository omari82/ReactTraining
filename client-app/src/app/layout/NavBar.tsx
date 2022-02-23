import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import {NavLink} from 'react-router-dom';


export default function NavBar() {
    const {activityStore} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="../assets/logo.png" alt="logo" style={{marginRight:10}} />
                        Reactivities     
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity'  positive content='Create Activity'></Button>    
                </Menu.Item>
            </Container>
        </Menu>
    )
}