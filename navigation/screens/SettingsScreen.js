import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect} from 'react';
import axios from 'axios'

export default function SettingsScreen({ navigation }) {
    const [posts,setPosts]=useState([])
    const fetchData=()=>{
      axios.get('http://127.0.0.1:8000/manage/employee')
      .then((Response)=> setPosts(Response.data))
      .catch((err)=>console.log(err))
    }
    const deleteData=(id)=>{
        axios.delete(`http://127.0.0.1:8000/manage/empdel/${id}`)
        .then((Response)=> alert('successfully deleted'),fetchData())
        .catch((err)=>console.log(err))
      }
    useEffect(()=>{fetchData()},[])
    
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           { posts.map((post)=>{
      return (
        <Text
                onPress={() => navigation.navigate('Hoe')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>first name: {post.fname} <br></br>last name:{post.lname} <br></br> salary: {post.salary} <br></br><button onClick={()=>deleteData(post.id)}>Delete</button></Text>
      ) 
    })}
           
            
        </View>
    );
}