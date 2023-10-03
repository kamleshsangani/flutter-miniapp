import { useState } from 'react';
import GradientButton from 'react-linear-gradient-button';
import MAJSBridge from './majsbridge_flutter.js';

//npm install react-linear-gradient-button

export default function MyApp() {
  const [resultText, setResultText] = useState('Waiting for result...');
  const [imageText, setImageText] = useState('Loading image...');

  function handleMobileAgentClick() {
    const request = JSON.stringify({
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maGetMobileAgent", request, "maGetMobileAgentCallBack");
  }

  window.maGetMobileAgentCallBack = (response) => {
    console.log(response);
    setResultText(response);
  }

  function handleFetchAuthCodeClick() {
    const request = JSON.stringify({
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maFetchAuthCode", request, "maFetchAuthCodeCallBack");
  }

  window.maFetchAuthCodeCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleRefreshAuthCodeClick() {
    const request = JSON.stringify({
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maRefreshAuthCode", request, "maRefreshAuthCodeCallBack");
  }

  window.maRefreshAuthCodeCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleSelectCameraPhotoClick() {
    const request = JSON.stringify({
      "request": {
        "requestCode": "4563784",
        "title": "string",
        "isLandscapeMode": false
      }
    });
    MAJSBridge("maSelectCameraPhoto", request, "maSelectCameraPhotoCallBack");
  }

  window.maSelectCameraPhotoCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleSelectGalleryPhotoClick() {
    const request = JSON.stringify({
      "request": {
        "requestCode": "12345",
        "title": "string",
        "isLandscapeMode": false
      }
    });
    MAJSBridge("maSelectGalleryPhoto", request, "maSelectGalleryPhotoCallBack");
  }

  window.maSelectGalleryPhotoCallBack = (response) => {
    console.log(response);
    setResultText(response);
    const obj = JSON.parse(response);
    console.log("Request code: " + obj.data.requestCode);
    setImageText(obj.data.base64)
  };

  function handleVerifyIdentityClick() {
    const request = JSON.stringify({
      "request": {
        "appReferenceId": "KYCJO16807655472381018"
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maRunLivenessCheck", request, "maRunLivenessCheckCallBack");
  }

  window.maRunLivenessCheckCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleIsUaePassInstalledClick() {
    const request = JSON.stringify({
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maIsUAEPassInstalled", request, "maIsUAEPassInstalledCallBack");
  }

  window.maIsUAEPassInstalledCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleDeviceInfoClick() {
    const request = JSON.stringify({
      "request": {
        "applicationID": "3242432232"
      }
    });
    MAJSBridge("maGetDeviceInfo", request, "maGetDeviceInfoCallBack");
  }

  window.maGetDeviceInfoCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleCurrentLocationClick() {
    const request = JSON.stringify({
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maGetCurrentLocation", request, "maGetCurrentLocationCallBack");
  }

  window.maGetCurrentLocationCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleDisplayDialogClick() {
    const request = JSON.stringify({
      "request": {
        "exitMiniApp": true,
        "warningMessage": {
          "en": "Registration completed successfully. Now login to application",
          "ar": "هل أنت متأكد أنك تريد إغلاق التطبيق؟"
        },
        "action": "OPEN_LOGIN_SCREEN"
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
    MAJSBridge("maDisplayDialogMessage", request, "maDisplayDialogMessageCallBack");
  }

  window.maDisplayDialogMessageCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleOpenInBrowserClick() {
    const request = JSON.stringify({
      "request": {
        "externalUrl": "https://www.google.co.in/"
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    })
     
    MAJSBridge('maOpenInBrowser', request, 'maOpenInBrowserCallBack');
  }

  window.maOpenInBrowserCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  window.maDisplayDialogMessageCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleScaneQRCodeClick() {
    const request = JSON.stringify({
      "request": {
        "requestCode": "1234" 
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
        
    MAJSBridge('maScanQRCode', request, 'maScanQRCodeCallBack');
  }

  window.maScanQRCodeCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleSelectContactClick() {
    const request = JSON.stringify({
      "request": {
        "requestCode": "1234"  
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
              
    MAJSBridge('maSelectContact', request, 'maSelectContactCallBack');
  }

  window.maSelectContactCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleShareDocumentClick() {
    const request = JSON.stringify({
      "request": {
        "documentName": "sample_file.pdf",
        "documentType": "application/pdf",
        "base64": "JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg=="
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
        
    MAJSBridge('maShareDocument', request, 'maShareDocumentCallBack');
  }

  window.maShareDocumentCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleShareTextClick() {
    const request = JSON.stringify({
      "request": {
        "data": "Your Transaction has been processed Please check the payment details : name : zaid iban:123 amount:50JOD"
      },
      "metadata": {
        "version": 1.0,
        "miniAppId": "SEWRFSD"
      }
    });
      
    MAJSBridge('maShareTextData', request, 'maShareTextDataCallBack');
  }

  window.maShareTextDataCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleDownloadDocumentClick() {
    const request = JSON.stringify({
      "request": {
        "documentName": "sample_file.pdf",
        "documentType": "application/pdf",
        "base64": "JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg=="
      }
    });
    MAJSBridge("maDownloadDocument", request, 'maDownloadDocumentCallBack');
  }

  window.maDownloadDocumentCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleCloseScreenClick() {
    const request = JSON.stringify({
      "request": {
        "showWarningPopup": true,
        "warningMessage": {
          "en": "Do you really want to close screen?",
          "ar": "هل تريد حقًا إغلاق الشاشة؟"
        }
      }
    });
    MAJSBridge("maCloseScreen", request, "maCloseScreenCallBack");
  }

  window.maCloseScreenCallBack = (response) => {
    console.log(response);
    setResultText(response);
  };

  function handleShowAlertClick() {
    alert('This is an alert message!');
  }

  return (
      <center>
        <div>
          <h1>React MiniApp</h1>

          <GradientButton onClick={() => handleMobileAgentClick()}>Get Mobile Agent
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleFetchAuthCodeClick()}>Get Auth Code
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleRefreshAuthCodeClick()}>Refresh Auth Code
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleSelectCameraPhotoClick()}>Select Camera Photo
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleSelectGalleryPhotoClick()}>Select Gallery Photo
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleVerifyIdentityClick()}>Verify Identity
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleIsUaePassInstalledClick()}>Is UAE Pass Installed?
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleDeviceInfoClick()}>Get Device Info
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleCurrentLocationClick()}>Get Current Location
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleDisplayDialogClick()}>Display Dialog
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleOpenInBrowserClick()}>Open In Browser
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleScaneQRCodeClick()}>Scan QR Code
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleSelectContactClick()}>Select Contact
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleShareDocumentClick()}>Share Document
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleShareTextClick()}>Share Text
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleDownloadDocumentClick()}>Download document
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleCloseScreenClick()}>Close Screen
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <GradientButton onClick={() => handleShowAlertClick()}>Show Local Alert
          </GradientButton>
          <br></br>
          <br></br>
          <br></br>

          <p><a href="external:uaepassstg://?action=PRESENTMENT&clientid=did:uae:eth:d3879ee2681b208bc006309da8d4341fc65f0f2e&requestid=AB21RW0411357586">Open UAE Pass Link</a></p>
          <br></br>
          <br></br>
          <br></br>

          <p>{resultText}</p>
          <br></br>
          <br></br>
          <br></br>
          <img src={`data:image/jpeg;base64,${imageText}`} alt="To display Selected Item" />
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <p>The End</p>
        </div>
      </center>
  );
}
