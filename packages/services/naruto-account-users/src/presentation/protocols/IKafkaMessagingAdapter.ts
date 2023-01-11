export default interface IKafkaMessagingAdapter {
  sendMessage(topic: string, message: any): Promise<void>
}