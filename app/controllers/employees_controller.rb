class EmployeesController < ApplicationController
#    before_action :require_admin

  def index
    @employees = Employee.all
    render json: @employees, status: 200 #added this for API display 
  end 

  def show
    @employee = Employee.find(params[:id])
  end

  def new
  # only Admin can create new employee when logged in
  # logged-in users will not have access to new and create employee methods
    if current_user && current_user.role != "Admin"
      redirect_to user_path(current_user)
    end
    @employee = Employee.new
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      # Admin is redirected to employees index after creating a employee.
      redirect_to employees_path
    else
      render :new
    end
  end

  def edit
    @employee = Employee.find(params[:id])
  end

  def update
    @employee = Employee.find(params[:id])
    if @employee.update(employee_params)
      redirect_to @employee, notice: 'employee was successfully updated.'
    else
      render :edit
    end
  end

  def delete
    #byebug
    @employee = Employee.find(params[:id])
  end

  def destroy
    #byebug
    @employee = Employee.find(params[:id])
    @employee.delete

    #current_employee should be Admin at this point since only Admin should have access to destroy method
    redirect_to employees_path(current_user)   
  end

  private
    def require_admin
    #byebug
      redirect_to user_path(current_user) unless current_user.role === "Admin"
    end

    def employee_params
      params.require(:employee).permit(
      :name,
      :department
      )
    end

end
