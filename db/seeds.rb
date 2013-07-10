role = {
  :system => {
    :administrator => true
  }
}

# new role for data entry 
new_role_hash = {
  

  # factory 
  :item_receivals => {
    :index => true 
  },
  :template_sales_items => {
    :index => true 
  },
  
  # sales 
  :customers => {
    :index => true 
  },
  :sales_orders => {
    :index => true 
  },
  :deliveries => {
    :index => true 
  },
  :sales_returns => {
    :index => true 
  },
  :guarantee_returns => {
    :index => true 
  },
  
  # payments
  
  :invoices => {
    :index => true 
  },
  :payments => {
    :index => true 
  }
}

# new_role_hash = {
#   :materials => {
#     :index => false
#   }
# }

Role.create!(
:name        => ROLE_NAME[:admin],
:title       => 'Administrator',
:description => 'Role for administrator',
:the_role    => role.to_json
)
admin_role = Role.find_by_name ROLE_NAME[:admin]
first_role = Role.first

data_entry_role = {
  :customers => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_customer => true ,
    :delete_customer => true  
  },
  :sales_orders => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_sales_order => true ,
    :delete_sales_order => true ,
    :confirm_sales_order => true,
    :print_sales_order => true 
  },
      :sales_items => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_sales_item => true ,
        :delete_sales_item => true ,
        :confirm_sales_item => true,
        :new_derivative => true, 
        :create_derivative => true ,
        :edit_derivative => true,
        :update_derivative => true  
      },
  :pre_production_histories => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_pre_production_history => true ,
    :delete_pre_production_history => true,
    :confirm_pre_production_history => true
  },
  :production_histories => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_production_history => true ,
    :delete_production_history => true,
    :confirm_production_history => true
  },
  :post_production_histories => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_post_production_history => true ,
    :delete_post_production_history => true,
    :confirm_post_production_history => true
  },
  :deliveries => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_delivery => true ,
    :delete_delivery => true,
    :confirm_delivery => true,
    :finalize_delivery => true ,
    :print_delivery => true 
  },
      :delivery_entries => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_delivery_entry => true ,
        :delete_delivery_entry => true,
        :confirm_delivery_entry => true,
        :edit_post_delivery_delivery_entry => true ,
        :update_post_delivery_delivery_entry => true 
      },
      
  :sales_returns => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_sales_return => true ,
    :delete_sales_return => true,
    :confirm_sales_return => true
  },
      :sales_return_entries => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_sales_return_entry => true ,
        :delete_sales_return_entry => true 
      },
  
  :guarantee_returns => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_guarantee_return => true ,
    :delete_guarantee_return => true,
    :confirm_guarantee_return => true
  },
      :guarantee_return_entries => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_guarantee_return_entry => true ,
        :delete_guarantee_return_entry => true 
      },    
   
  :item_receivals => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_item_receival => true ,
    :delete_item_receival => true,
    :confirm_item_receival => true
  },
      :item_receival_entries => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_item_receival_entry => true ,
        :delete_item_receival_entry => true 
      },
  
  :invoices => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_invoice => true ,
    :delete_invoice => true,
    :confirm_invoice => true,
    :print_invoice => true 
  }, 
  
  :payments => {
    :new => true,
    :create => true, 
    :edit => true, 
    :update_payment => true ,
    :delete_payment => true,
    :confirm_payment => true,
    :print_payment => true 
  },
      :invoice_payments => {
        :new => true,
        :create => true, 
        :edit => true, 
        :update_invoice_payment => true ,
        :delete_invoice_payment => true 
      }
}


data_entry_role = Role.create!(
:name        => ROLE_NAME[:data_entry],
:title       => 'Data Entry',
:description => 'Role for data entry',
:the_role    => data_entry_role.to_json
)


# company = Company.create(:name => "Super metal", :address => "Tanggerang", :phone => "209834290840932")
admin = User.create_main_user(   :email => "admin@gmail.com" ,:password => "willy1234", :password_confirmation => "willy1234") 

admin.set_as_main_user
 

