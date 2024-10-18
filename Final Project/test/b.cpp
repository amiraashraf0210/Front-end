#include<iostream>
using namespace std;

int main(){
    int t;
    cin >> t;
    
    while(t--){
        int n;
        cin >> n;
        long long A[n]; 
        long long total = 0; 
        
        for(int i = 0; i < n; i++){
            cin >> A[i];
            total += A[i]; 
        }
        if(total % 2 == 0){
            cout << "YES" << endl;
        }else{
            cout << "NO" << endl;
        } }
    
    return 0;
}
