import { Toast } from 'antd-mobile';

class FetchRequest extends React.Component {
    static beforeLoadingCallBack() {
      Toast.loading('Loading...');
    }

    static afterLoadingCallBack() {
      Toast.hide();
    }

    static failedCallBack(error) {
      console.error(error);
      Toast.fail('Request error...');
    }

    static request(url, afterRequest) {
        this.beforeLoadingCallBack();

        fetch(url, {
          method:'GET',
          header:{
          },
        }).then((response) => {
          return response.json();
        }).then((responseJson) => {
          this.afterLoadingCallBack();
          afterRequest(JSON.stringify(responseJson));
        }).catch((error) => {
          this.failedCallBack(error);
        });
    }
}

export default FetchRequest;