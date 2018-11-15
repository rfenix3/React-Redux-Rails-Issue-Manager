class IssuesController < ApplicationController
  # before_action :exclude_guest, only: [:new, :create, :edit, :update, :delete, :destroy]

  def index
    #byebug
    if params[:user_id]
      @issues = User.find(params[:user_id]).issues.order_by_latest    
    else
      @issues = Issue.all.order_by_latest
      render json: @issues, status: 200 
    end
  end 
    
  #sort index output by effort
  def effort_sort
    @issues = Issue.all.order_by_effort  
    render :index  
  end

  def show
    @issue = Issue.find(params[:id])
  end
    
  def new
    @issue = Issue.new
    #byebug
  end
    
  def create
    #byebug
    @issue = Issue.new(issue_params)
    if @issue.save
      redirect_to issues_path
    else
      render :new
    end
  end

  def edit
    @issue = Issue.find(params[:id])
  end
  
  def update
    #byebug
    @issue = Issue.find(params[:id])
    if @issue.update(issue_params)
      redirect_to issues_path(current_user), notice: 'Issue was successfully updated.'
    else
      render :edit
    end
  end
 
  def delete
    #byebug
    @issue = Issue.find(params[:id])
  end
    
  def destroy
    #byebug
    @issue = Issue.find(params[:id])
    @issue.delete
    
    #current_employee should be Admin at this point since only Admin should have access to destroy method
    redirect_to issues_path(current_user)   
  end
    
  private
    def require_admin
    #byebug
      redirect_to user_path(current_user) unless current_user.role === "Admin"
    end
  
    def exclude_guest
      #byebug
      redirect_to issues_path(current_user) if current_user.role.downcase === "guest"
    end


    def issue_params
      params.require(:issue).permit(
      :title,
      :status,
      :owner,
      :created,
      :effort,
      :completion_date,
      :employee_id,
      :user_id
      )
    end

end
