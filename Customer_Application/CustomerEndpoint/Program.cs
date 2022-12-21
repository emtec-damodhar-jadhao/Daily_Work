// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Console.Title = "UserData_Receiver";

var endpointConfiguration = new EndpointConfiguration("CustomerEndpoint");

var transport = endpointConfiguration.UseTransport<LearningTransport>();
transport.StorageDirectory("C:\\Users\\Damodhar.Jadhao\\Desktop\\Customer_Application\\Customer_Api\\.learningtransport\\");

endpointConfiguration.EnableInstallers();

var endpointInstance = await Endpoint.Start(endpointConfiguration);


Console.WriteLine("Press Enter to exit.");
Console.ReadLine();

await endpointInstance.Stop();
