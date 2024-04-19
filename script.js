  // JavaScript code
  const createAccountLink = document.getElementById('create-account-link');
  const showAllAccountLink = document.getElementById('show-all-account-link');
  const searchAccountLink = document.getElementById('search-account-link');
  const depositMoneyLink = document.getElementById('deposit-money-link');
  const withdrawMoneyLink = document.getElementById('withdraw-money-link');
  const exitLink = document.getElementById('exit-link');
  const accountDetailsDiv = document.getElementById('account-details');
  const accountTableBody = document.getElementById('account-table-body');

  let accounts = [];

  // Function to create a new account
  createAccountLink.addEventListener('click', function(event) {
      event.preventDefault();
      const name = prompt('Enter your name:');
      const accountNum = parseInt(prompt('Enter your account number:'));
      const balance = parseFloat(prompt('Enter initial balance to deposit:'));
      accounts.push({ name, accountNum, balance });
      alert('Account created successfully!');
  });

  // Function to show all accounts
  showAllAccountLink.addEventListener('click', function(event) {
      event.preventDefault();
      accountDetailsDiv.style.display = 'block';
      accountTableBody.innerHTML = '';
      accounts.forEach(account => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${account.name}</td>
              <td>${account.accountNum}</td>
              <td>${account.balance}</td>
          `;
          accountTableBody.appendChild(row);
      });
  });

  // Function to search for an account
  searchAccountLink.addEventListener('click', function(event) {
      event.preventDefault();
      const accountNum = parseInt(prompt('Enter the account number to search:'));
      const account = accounts.find(acc => acc.accountNum === accountNum);
      if (account) {
          alert(`Name: ${account.name}\nAccount Number: ${account.accountNum}\nBalance: ${account.balance}`);
      } else {
          alert('Account not found!');
      }
  });

  // Function to deposit money
  depositMoneyLink.addEventListener('click', function(event) {
      event.preventDefault();
      const accountNum = parseInt(prompt('Enter account number to deposit money:'));
      const amount = parseFloat(prompt('Enter amount to deposit:'));
      const accountIndex = accounts.findIndex(acc => acc.accountNum === accountNum);
      if (accountIndex !== -1) {
          accounts[accountIndex].balance += amount;
          alert(`Deposit successful! New balance: ${accounts[accountIndex].balance}`);
      } else {
          alert('Account not found!');
      }
  });

  // Function to withdraw money
  withdrawMoneyLink.addEventListener('click', function(event) {
      event.preventDefault();
      const accountNum = parseInt(prompt('Enter account number to withdraw money:'));
      const amount = parseFloat(prompt('Enter amount to withdraw:'));
      const accountIndex = accounts.findIndex(acc => acc.accountNum === accountNum);
      if (accountIndex !== -1) {
          if (accounts[accountIndex].balance >= amount) {
              accounts[accountIndex].balance -= amount;
              alert(`Withdrawal successful! New balance: ${accounts[accountIndex].balance}`);
          } else {
              alert('Insufficient balance!');
          }
      } else {
          alert('Account not found!');
      }
  });

  // Function to exit the system
  exitLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (confirm('Are you sure you want to exit?')) {
          window.close();
      }
  });
