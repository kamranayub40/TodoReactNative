import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,FlatList,ScrollView,SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  const [text,setText]=useState('')
  const[Todos,setTodos] = useState([
    {
      text:"Programming",key:"1"
    },
    {
      text:"Watch Movie",key:"2"
    },
    {
      text:"Lunch",key:"3"
    }
  ])
  const presshandeler=(key)=>{
    setTodos((prevTodo)=>{
      return prevTodo.filter(todo=>todo.key !=key)
    }); 


  }
  const presshandelerDelteall=(Todos)=>{
    setTodos((prevTodo)=>{
      return prevTodo.filter(todo=>todo.Todos !=Todos)
    }); 

  }

   const additem=(text)=>{
     setTodos((prevTodo)=>{
       return[
         {text:text,key:Math.random().toString()},
         ...prevTodo
       ]
     })
  }


  return (
        <View style={styles.container}>
          <View style={styles.container1}>

              <Text style={{fontSize:24,color:'blue'}}>Todo<Text style={{color:'black'}}> App</Text></Text>
          </View>
            <View>
              <TextInput  placeholder="Enter your Task" style={styles.input} 
              onChangeText={val=>setText(val)}

              
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>additem(text)}>
              <Text style={{color:"white"}}>AddItem</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn1}  onPress={(item)=>presshandelerDelteall(item.key)}>
              <Text style={{color:"white"}}>Delete All</Text>
            </TouchableOpacity>
              <FlatList style={styles.item}
                data={Todos}
                renderItem={({item})=>(
                  // <TouchableOpacity style={{padding:10}} onPress={()=>presshandeler(item.key)}>
                  
                  /* </TouchableOpacity> */
                  <ScrollView>

                  <View style={styles.itemConteiner}>

                    <Text styles={styles.itemText}>{item.text}    <TouchableOpacity onPress={()=>presshandeler(item.key)}>
                    <Text style={{marginLeft:230}}><AntDesign name="delete" size={24} color="red"  /></Text>
                    </TouchableOpacity></Text>
                  </View>
                  </ScrollView>
                   
                  )}
              
              
              />
      </View>
        
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   marginTop:50
  // },
  container1: {
    flex: 1,
    backgroundColor: 'red',
    marginTop:50,
    marginLeft:130
    
  },
  input:{
    fontSize:24,
    color:'black',
    paddingHorizontal:6,
    padding:6,
    borderWidth:3,
    borderColor:'deepskyblue',
    marginHorizontal:20,
    margin:60
    // height:2, borderColor: 'gray', borderWidth: 3,
  },
  btn:{
    backgroundColor:"deepskyblue",
    paddingHorizontal:90,
    marginHorizontal:60,
    paddingTop:3,
    paddingBottom:3,
    marginTop:-50,
    padding:10
  },
  btn1:{
    backgroundColor:"deepskyblue",
    color:"white",
    paddingHorizontal:90,
    marginHorizontal:60,
    paddingTop:3,
    paddingBottom:3,
    padding:10
    // marginTop:-50


  },
  item:{
    padding:20,
    
  },
  itemText:{
    paddingHorizontal:200,
    padding:2,
    // paddingBottom:3,
    
  },
  itemConteiner:{
    color:"blue",
    borderWidth:1,
    padding:12,
    backgroundColor:"grey",


    
  
  }

});
