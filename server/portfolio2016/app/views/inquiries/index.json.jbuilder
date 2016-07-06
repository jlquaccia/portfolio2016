json.array!(@inquiries) do |inquiry|
  json.extract! inquiry, :id, :name, :email, :phone, :message
  json.url inquiry_url(inquiry, format: :json)
end
