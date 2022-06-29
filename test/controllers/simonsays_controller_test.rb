require "test_helper"

class SimonsaysControllerTest < ActionDispatch::IntegrationTest
  test "should get simonsays" do
    get simonsays_simonsays_url
    assert_response :success
  end
end
