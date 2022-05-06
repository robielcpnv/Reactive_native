import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

class Dog extends Component {
  state = {
    isBlackImageSelect :false,
    isLogoImageSelect :false
  };
   render()
   {
      return(
        <View>
          <View style={{marginBottom:10}}>
              <TouchableOpacity 
                style={{  borderRadius:10, alignItems:'center'}}
                onPress={() => {
                  this.setState({isBlackImageSelect: !this.state.isBlackImageSelect});} 
                }>
                <Image
                  source={require('./assets/image/black.png')}
                  style={{ width: 300, height: 300,borderRadius:20, backgroundColor: this.state.isBlackImageSelect ?'black': 'white'}}/>
              </TouchableOpacity> 

              <TouchableOpacity 
                style={{  borderRadius:10, alignItems:'center'}}
                onPress={() => {
                  this.setState({isLogoImageSelect: !this.state.isLogoImageSelect});} 
                }>
                <Image
                  source={require('./assets/image/logo.png')}
                  style={{ width: 300, height: 300, borderRadius:20, backgroundColor: this.state.isLogoImageSelect ? 'black' : 'white' }}/>
              </TouchableOpacity>   
          </View>
        </View>
        
      );
    }
  }


export default class App extends Component {
  render (){
    return (
     <ScrollView>
        <View style={styles.container }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}> 
          <Text style={{fontSize:30,fontWeight:'bold',color:'#008080', padding:10}}>
          MOB1
        </Text>
        <Text style={{fontSize:15,padding:10,fontStyle:'italic'}}>
          Applications mobiles avec un frameworkhybride 🎉
        </Text>
          </View>

        <Dog />
        <StatusBar style="auto" />
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
