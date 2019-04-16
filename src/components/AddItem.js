import React, {Component} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {db} from '../config';

let addItem = item => {
    db.ref('/items').push({
         itemInfo : item,
    })
}

let itemsRef = db.ref('/items');

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = { 
            itemInfo: '',
            items: [],
         }
        this.handleChange= this.handleChange.bind(this);
        this.clickToAdd= this.clickToAdd.bind(this);
     }
     handleChange(e){
       this.setState({itemInfo:e.nativeEvent.text})
     }
     clickToAdd(){
            addItem(this.state.itemInfo);
     }
     componentDidMount(){
         itemsRef.on('value', snapshot=>{
             let data = snapshot.val();
             let items = Object.values(data);
             this.setState({items});
         });
     }

    render(){
        return(
            <View>
               <TextInput
                style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChange={this.handleChange}
                value={this.state.itemInfo}
               />
               <Button 
               title='Add'
               onPress={this.clickToAdd}
               />
               {this.state.items.map(x=>{
                   return <Text> {x.itemInfo}</Text>
               })
               }
            </View>
        )
    }
}