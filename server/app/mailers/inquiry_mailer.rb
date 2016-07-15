class InquiryMailer < ApplicationMailer
  default from: 'Your Mailer <noreply@yourdomain.com>'
  default to: 'Jason Quaccia <jlquaccia@gmail.com>'

  def new_inquiry(inquiry)
    @new_inquiry = inquiry

    mail subject: 'Message from ' + @new_inquiry.name
  end
end