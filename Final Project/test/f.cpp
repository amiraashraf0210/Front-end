#include <iostream>
#include <vector>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;
        vector<int> coins(n);
        int product = 1;

        for (int i = 0; i < n; i++) {
            cin >> coins[i];
            product *= coins[i]; }

        vector<int> ways(product + 1, 0);
        ways[0] = 1; 

        for (int coin : coins) {
            for (int j = coin; j <= product; j++) {
                ways[j] += ways[j - coin]; }
        }

        cout << ways[product] << endl; }

    return 0;
}
