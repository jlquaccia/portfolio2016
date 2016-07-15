class InquiriesController < ApplicationController
  def create
    @inquiry = Inquiry.create(inquiry_params)
    render :nothing => true
  end

  private

  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :phone_number, :message)
  end
end